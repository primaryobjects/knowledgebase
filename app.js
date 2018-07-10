const readline = require('readline-sync');
const kb = require('./kb-plants.js');
const verbose = false;

const forwardChain = function(assertions) {
  // Select the first rule.
  let ruleIndex = 0;
  let rule = kb[ruleIndex];

  // While there are more rules.
  while (ruleIndex < kb.length) {
    // If all premises in the rule are in assertions
    const allPremisesExist = rule.premises.every(premise =>
      assertions.some(assertion => assertion.attribute === premise.attribute && assertion.value === premise.value)
    );

    // If all premises from the rule are in the assertions but not the conclusion.
    if (allPremisesExist && !assertions.some(assertion => assertion.attribute === rule.conclusion.attribute && assertion.value === rule.conclusion.value)) {
      // Add the conclusion to assertions.
      assertions.push(rule.conclusion);

      // Go back to the first rule, since the new assertion might exist as a premise in another rule.
      // This can be optimized by sorting rules based on if A's conclusion is a premise in B's, then place A before B.
      ruleIndex = 0;
    }
    else {
      // Select the next rule.
      rule = kb[++ruleIndex];
    }
  }

  return assertions;
};

const backChain = function(goal, assertions) {
  // Select the first rule.
  let ruleIndex = 0;
  assertions = assertions || [ goal ];

  // If there is an assertion with goal as its attribute.
  verbose && console.log(`Current goal: ${JSON.stringify(goal)}`);
  verbose && console.log(`Current assertions: ${JSON.stringify(assertions)}`);
  let assertion = assertions.filter(assertion => assertion.attribute === goal.attribute && assertion.value);
  assertion = assertion.length ? assertion[0] : null;
  verbose && console.log(`Found assertion: ${JSON.stringify(assertion)}`);

  if (!assertion) {
    // Go back to the first rule.
    ruleIndex = 0;

    while (!assertion && ruleIndex < kb.length) {
      const rule = kb[ruleIndex];

      if (rule.conclusion.attribute === goal.attribute) {
        let premiseIndex = 0;
        let allPremisesTrue = false;
        let premise = rule.premises[premiseIndex];
        let isPremiseAssertionTrue = true;

        verbose && console.log(`Rule conclusion: ${JSON.stringify(rule.conclusion)}`);

        while (!allPremisesTrue && isPremiseAssertionTrue) {
          const nextGoal = premise;

          verbose && console.log(`Calling backChain for goal ${JSON.stringify(nextGoal)}`);
          trueAssertion = backChain(nextGoal, assertions);
          verbose && console.log(`trueAssertion: ${JSON.stringify(trueAssertion)}`);

          // Add the assertion to the assertion list.
          assertions.push(trueAssertion);

          verbose && console.log(`${JSON.stringify(premise)} === ${JSON.stringify(trueAssertion)}`)

          // Is the trueAssertion equal to the premise?
          isPremiseAssertionTrue = JSON.stringify(premise) === JSON.stringify(trueAssertion);
          if (isPremiseAssertionTrue) {
            verbose && console.log(`${premiseIndex + 1} < ${rule.premises.length}`);

            if (++premiseIndex < rule.premises.length) {
              premise = rule.premises[premiseIndex];

              verbose && console.log(allPremisesTrue);
              verbose && console.log(`Using new premise ${JSON.stringify(premise)}`);
            }
            else {
              verbose && console.log('All premises true!');
              allPremisesTrue = true;
            }
          }
        }

        if (allPremisesTrue) {
          verbose && console.log(`New assertion: ${JSON.stringify(rule.conclusion)}`);
          assertion = rule.conclusion;
        }
      }

      // Select the next rule.
      ruleIndex++;
    }

    if (!assertion) {
      let existingAssertion = assertions.filter(a => a.attribute === goal.attribute);
      existingAssertion = existingAssertion.length ? existingAssertion[0] : null;
      if (existingAssertion) {
        assertion = existingAssertion;
      }
      else {
        // Prompt user for goal.
        const value = readline.question(`What is the value for ${goal.attribute}? `);
        assertion = { attribute: goal.attribute, value }; // Enter new assertion for the type and value specified by the user.
      }
    }
    else {
      const index = assertions.indexOf(a => a.attribute === assertion.attribute && !a.value);
      if (index > -1) {
        verbose && console.log('Updating value!');
        assertions[index].value = assertion.value;
      }
    }
  }

  return assertion;
};


//
// Test forward-chaining.
// User inputs: stem woody, position upright, one main trunk yes, broad and flat no
// Output includes: type is tree (because of original inputs), then using type is tree we can now deduce class gymnosperm
//
let assertions = [];
let attribute = 1;
while (attribute) {
  attribute = readline.question('Enter an attribute? ');
  if (attribute) {
    let value = readline.question('Enter a value? ');
    value && assertions.push({ attribute, value });
  }
}

assertions = forwardChain(assertions);
console.log(assertions);

//
// Test backward-chaining.
// User inputs: class, stem woody, position upright, one main trunk yes, broad and flat yes
// Output: angiosperm
//
let goal = { attribute: readline.question('What attribute type do you want to know? ') };
assertion = backChain(goal);

if (assertion.value) {
  console.log(assertion.value);
}
else {
  console.log(`You cannot answer enough questions to determine ${goal.attribute}.`);
}