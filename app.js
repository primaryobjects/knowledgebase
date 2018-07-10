const readline = require('readline-sync');
const kb = require('./data/plants.js');

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
  // Start with a single assertion of the goal.
  assertions = assertions || [ goal ];

  // If there is an assertion with the current goal as its attribute, select it.
  let assertion = assertions.filter(assertion => assertion.attribute === goal.attribute && assertion.value);
  assertion = assertion.length ? assertion[0] : null;

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

        while (!allPremisesTrue && isPremiseAssertionTrue) {
          const nextGoal = premise;

          trueAssertion = backChain(nextGoal, assertions);

          // Add the assertion to the assertion list.
          trueAssertion && assertions.push(trueAssertion);

          // Is the trueAssertion equal to the premise?
          isPremiseAssertionTrue = JSON.stringify(premise) === JSON.stringify(trueAssertion);
          if (isPremiseAssertionTrue) {
            // If there are more premises to satisfy, continue to the next one.
            if (++premiseIndex < rule.premises.length) {
              premise = rule.premises[premiseIndex];
            }
            else {
              // All premises are satisfied, the current rule triggers.
              allPremisesTrue = true;
            }
          }
        }

        if (allPremisesTrue) {
          // Trigger the current rule and include its conclusion as a true assertion.
          assertion = rule.conclusion;
        }
      }

      // Select the next rule.
      ruleIndex++;
    }

    if (!assertion) {
      // We can't deduce a value for this goal. If the goal is not the original query, prompt the user for a value.
      if (!assertions.filter(a => a.attribute === goal.attribute && !a.value).length) {
        // Prompt user for goal.
        const value = readline.question(`What is the value for ${goal.attribute}? `);
        assertion = { attribute: goal.attribute, value }; // Enter new assertion for the type and value specified by the user.
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

if (assertion) {
  console.log(assertion.value);
}
else {
  console.log(`You cannot answer enough questions to determine ${goal.attribute}.`);
}