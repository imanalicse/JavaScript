  // if: [
  //
  //     {
  //       source: '',
  //       sourceProperty: '',
  //       comparison: '',
  //       target: '',
  //       targetProperty: '',
  //     },
  // ],
  //

const CONDITION_TEMPLATE = () => ({
  if: [
      [
        {
          AND: [
            {
              source: '',
              sourceProperty: '',
              comparison: '',
              target: '',
              targetProperty: '',
            }
          ]
        },
      ],
      [
        {
          OR: [
            {
              source: '',
              sourceProperty: '',
              comparison: '',
              target: '',
              targetProperty: '',
            }
          ]
        },
      ],
            [
        {
          AND: [
            {
              source: '',
              sourceProperty: '',
              comparison: '',
              target: '',
              targetProperty: '',
            }
          ]
        },
      ],
  ],
  ifMore: [
    {
      ifAddConditionButton: '',
    },
  ],
  then: [
    {
      target: '',
      targetProperty: '',
      assignment: '',
      value: '',
    },
  ],
})
let data = CONDITION_TEMPLATE();
let ifs = data.if;
console.log('ifs', ifs);
ifs.forEach(function (ifCon, index) {
  let item = ifCon[0];
  let andOr = Object.keys(item)[0];
  let ifConditionObj = item[andOr][0];
  let betweenAndOr = undefined;
  if (index > 0 && ifs[index] && ifs[index][0]) {
    betweenAndOr = Object.keys(ifs[index][0])[0];
  }
  console.log(betweenAndOr)
})
