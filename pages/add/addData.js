var staticData = require("../../staticData.js");

class Add {
  constructor(data) {
    let arr = [{
        label: '基金类型',
        prop: 'fundType',
        notRender: true,
        value: data.fundType
      },
      {
        label: '计算类型',
        prop: 'pType',
        notRender: true,
        value: data.pType
      },
      {
        label: '低估临界值',
        prop: 'limitPe',
        notRender: true,
        value: data.limitPe
      },
      {
        label: '起投金额',
        prop: 'startMoney',
        value: data.startMoney,
        disabled: true,
      },
      {
        type: 'text',
        label: '起投时间',
        prop: 'startDate',
        value: data.startDate,
        disabled: true,
      },
      {
        label: `起投${data.pType == staticData.RATE.PY ? '盈收率' : 'PE'}`,
        prop: 'startPe',
        value: data.startPe,
        disabled: true,
      },
      {
        label: `当前${data.pType == staticData.RATE.PY ? '盈收率' : 'PE'}`,
        prop: 'curPe',
        value: data.curPe || "",
      },
      {
        label: '当前股价',
        prop: 'curStockPrice',
        notRender: data.fundType == staticData.FUND_TYPE.OUTER,
        value: data.curStockPrice || '',
      },
      {
        label: '倍增系数',
        prop: 'multiple',
        value: data.multiple || 2,
      },
    ]
    return arr;
  }
}
module.exports = Add;