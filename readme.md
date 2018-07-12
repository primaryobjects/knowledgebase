An Expert System Using Logic-Based Artificial Intelligence
==========================================================

This project is an example of building an expert system, using a knowledge-base constructed with logic-based artificial intelligence, also called symbolic AI.

## Usage

```bash
npm install
node app.js
```

### First Example

The first example demonstrates forward-chaining. To use the example, provide the following example inputs below.

```
stem
woody
position
upright
one main trunk
yes
broad and flat
no
<press enter two times>
```

You should see the following output.

```js
[ { attribute: 'stem', value: 'woody' },
  { attribute: 'position', value: 'upright' },
  { attribute: 'one main trunk', value: 'yes' },
  { attribute: 'broad and flat', value: 'no' },
  { attribute: 'type', value: 'tree' },
  { attribute: 'class', value: 'gymnosperm' } ]
```

The first 4 items are our provided inputs. The second two are new attributes deduced from the knowledge-base.

```
type is tree
class gymnosperm
```

Why? The first output of `tree` is because of the original input attributes all being found for "type = tree". The second output of "class gymnosperm" is added due to the addition of "type tree" as a new attribute. In this manner, both the "type" and the "class" were intelligently deduced from the original input query.

### Second Example

The second example demonstrates backward-chaining. To use the example, provide the following example inputs below.

```
class
```

The program will then prompt you for values for additional attributes as it narrows down on selecting a class for you.

```
stem: woody
position: upright
one main trunk: yes
broad and flat: yes
```

You should see the output:

```
angiosperm
```

Why? This is the attribute value for the `class` which satisfies all attributes provided in the input.

## About

Logic-based artificial intelligence is a form of classical AI that deals with representing knowledge as human-readable logical statements. In constrast to the machine learning statistical techniques that are currently popular, classical AI uses logical mechanisms for deducing intelligent statements and making decicisons.

One type of system that can be created with logical AI is an expert system.

## Expert Systems

An expert system contains its knowledge usually in the form of a database, or, knowledge-base. By decoupling the knowledge from the actual software algorithm, an expert system can navigate through the database of facts to determine classifications and make decisions. The database is typically created by a human expert, and as such, the extent of knowledge that an expert system contains is typically confined to that of the human providing the content.

For example, a medical diagnosis expert system may contain a knowledge-base consisting of many different facts about diseases, symptoms, and conditions. The data can usually be represented by a tree hierarchy, from which one could navigate through the brances of symptoms until a particular conclusion is reached (i.e., disease or condition). By using a logic-based AI algorithm on the knowledge-base, such as forward-chaining and backward-chaining, an algorithm can intelligently traverse the tree, narrowing down the conclusion based upon the patient's provided symptoms.

### Forward Chaining

Forward chaining is the process of traversing through the knowledge-base from top to bottom, seeking a rule by which all attributes are satisfied. For example, if every single one of a rule's attributes exist within the set of the patient's condition, then that rule triggers, thus providing a condition. If no rule is found with all of the attributes present from the patient, then a conclusion could not be found.

### Backward Chaining

In contrast to forward-chaining, backward-chaining tries to first locate a rule who's conclusion matches one of the patient's provided attributes. When a rule is found, the process repeats, using the discovered rule's attributes as new goals. The user is prompted to enter new values for attributes as they are discovered through the process. Once the algorithm satisfies all attributes for the chain of rules it can return the response to the user's original query.

## The Project

This project contains an implementation of forward-chaining and backward-chaining in JavaScript. It also contains two example knowledge-bases, written in JSON.

#### data/plants.js

A [knowledge-base](data/plants.js) consisting of traits and classifications for plants.

#### data/etfs.js

A [knowledge-base](data/etfs.js) consisting of classes and categories for selecting a stock/bond percentage based upon risk tolerance.

## License

MIT

## Author

Kory Becker http://www.primaryobjects.com
