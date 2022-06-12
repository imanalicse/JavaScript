let conditions = [
    {
        "if": [
            {
                "source": "fields.b4b36aa4-a179-4730-83a6-e7d3bc21ff98",
                "sourceProperty": "value",
                "comparison": "equals",
                "target": "au",
                "targetProperty": "value"
            }
        ],
        "ifMore": [
            {
                "ifAddConditionButton": ""
            }
        ],
        "then": [
            {
                "target": "fields.1cf8c0d4-df48-4237-a2d7-bbab313fd2bf",
                "targetProperty": "isNotVisible",
                "assignment": "equals",
                "value": ""
            }
        ]
    },
    {
        "if": [
            {
                "source": "fields.b4b36aa4-a179-4730-83a6-e7d3bc21ff98",
                "sourceProperty": "value",
                "comparison": "equals",
                "target": "bd",
                "targetProperty": "value"
            }
        ],
        "ifMore": [
            {
                "ifAddConditionButton": ""
            }
        ],
        "then": [
            {
                "target": "fields.1cf8c0d4-df48-4237-a2d7-bbab313fd2bf",
                "targetProperty": "isVisible",
                "assignment": "equals",
                "value": ""
            }
        ]
    },
    {
        "AND_OR": [
            {
                "comparisonIfAnd": "",
                "comparisonIfOr": ""
            }
        ],
        "if": [
            {
                "andBtn": "AND",
                "orBtn": "OR",
                "andOrComparisonValue": "AND",
                "source": "fields.9902951b-a5ef-4806-a861-47a026eb30ff",
                "sourceProperty": "value",
                "comparison": "equals",
                "target": "sylhet",
                "targetProperty": "value"
            }
        ]
    },
    {
        "AND_OR": [
            {
                "comparisonIfAnd": "",
                "comparisonIfOr": ""
            }
        ],
        "if": [
            {
                "andBtn": "AND",
                "orBtn": "OR",
                "andOrComparisonValue": "AND",
                "source": "fields.9902951b-a5ef-4806-a861-47a026eb30ff",
                "sourceProperty": "value",
                "comparison": "equals",
                "target": "sylhet",
                "targetProperty": "value"
            }
        ]
    }
];

conditions = [
    {
        "if": [
            {
                "source": "fields.e722a2c2-8334-45a0-a0c1-d1f8085bdbbd",
                "sourceProperty": "value",
                "comparison": "equals",
                "target": "bd",
                "targetProperty": "value"
            }
        ],
        "add_more_if": [
            {
                "addMoreIfButton": ""
            }
        ],
        "then": [
            {
                "target": "fields.5c5686dc-c532-4b56-8db1-edacaf9d1f62",
                "targetProperty": "isNotVisible",
                "assignment": "equals",
                "value": ""
            }
        ]
    },
    {
        "if": [
            {
                "source": "fields.e722a2c2-8334-45a0-a0c1-d1f8085bdbbd",
                "sourceProperty": "value",
                "comparison": "equals",
                "target": "au",
                "targetProperty": "value"
            }
        ],
        "add_more_if": [
            {
                "addMoreIfButton": ""
            }
        ],
        "then": [
            {
                "target": "fields.5c5686dc-c532-4b56-8db1-edacaf9d1f62",
                "targetProperty": "isVisible",
                "assignment": "equals",
                "value": ""
            }
        ]
    },
    {
        "if": [
            {
                "andOrComparisonValue": "and",
                "source": "fields.a676e48c-09af-4f89-9622-dfc7b2b0fdc6",
                "sourceProperty": "value",
                "comparison": "equals",
                "target": "vic",
                "targetProperty": "value"
            }
        ]
    },
    {
        "if": [
            {
                "andOrComparisonValue": "and",
                "source": "fields.c681e672-99d7-49dd-9512-c5c00d0d6af8",
                "sourceProperty": "value",
                "comparison": "equals",
                "target": "mel",
                "targetProperty": "value"
            }
        ]
    }
]
console.log('==========conditions=======');
console.log(conditions);

  mergeIfModeConditions = (conditions) => {
      const newConditions = JSON.parse(JSON.stringify(conditions));
      let processedConditions = [];
      if (newConditions) {
          let lastIfThenIndex = 0;
          let deletedCount = 0;
          newConditions.forEach((condition, i) => {
            if ('then' in condition) {
                  lastIfThenIndex = i;
            }
            // console.log(i + ' = lastIfThenIndex = ' + lastIfThenIndex)
            if (('if' in condition) && ('then' in condition)) {
                processedConditions[i] = condition
            }
            else if (('if' in condition) && !('then' in condition)) {
                  // console.log('then not =' + i + '>' + lastIfThenIndex, conditions)
                  // newConditions[lastIfThenIndex]['if'].push(condition['if'][0])
                  // const sliceIndex = i - deletedCount;
                  //  newConditions.splice(sliceIndex, 1);
                  // deletedCount++;

                  processedConditions[lastIfThenIndex]['if'].push(condition['if'][0])
                  // const sliceIndex = i - deletedCount;
                  //  newConditions.splice(sliceIndex, 1);
                  // deletedCount++;

            }
        });
      }
      return processedConditions;
  }

let newConditions = mergeIfModeConditions(conditions);
console.log(newConditions)

console.log('------------------')
// console.log(conditions);
const LOGICAL_OPERATORS = {
  and: '&&',
  or: '||',
}

const ifConditions = [
    {
        "source": "fields.5b81293e-4b2f-43a3-9438-55c5a7f58718",
        "sourceProperty": "value",
        "comparison": "equals",
        "target": "au",
        "targetProperty": "value"
    },
    {
        "andBtn": "AND",
        "orBtn": "OR",
        "andOrComparisonValue": "and",
        "source": "fields.f82b721f-4adf-44dc-bcf3-253d4622cc4e",
        "sourceProperty": "value",
        "comparison": "equals",
        "target": "vic",
        "targetProperty": "value"
    },
     {
        "andBtn": "AND",
        "orBtn": "OR",
        "andOrComparisonValue": "or",
        "source": "fields.f82b721f-4adf-44dc-bcf3-253d4622cc4e",
        "sourceProperty": "value",
        "comparison": "equals",
        "target": "vic",
        "targetProperty": "value"
    }
];
let finalCondition = '';
let conditionResult = false;
ifConditions.forEach((ifCondition, i) => {
    const andOrComparisonValue = ifCondition['andOrComparisonValue'];
    if (andOrComparisonValue) {
       if (andOrComparisonValue === 'and') {
            let andValue = 0
            console.log(conditionResult + ' = AND andValue =' + andValue)
           conditionResult = conditionResult && andValue
           console.log('conditionResult=' + conditionResult)
       }
       else if (andOrComparisonValue === 'or') {
            let orValue = 1
            console.log(conditionResult+ ' = OR orValue = ' + orValue)
           conditionResult = conditionResult || orValue
           console.log('conditionResult =' + conditionResult)
       }
    }
    else {
        console.log('else')
        conditionResult = false;
    }
})
// setTimeout(() => {
//     console.log('conditionResult', conditionResult)
// }, 1000)
console.log('conditionResult', conditionResult)

console.log(finalCondition)
if (finalCondition) {
    console.log("TRUE")
}

const a = [
    {
        "target": "fields.bab57d42-856f-4c63-8bb8-10e305ec2328",
        "targetProperty": "isVisible",
        "assignment": "equals",
        "value": ""
    }
];
