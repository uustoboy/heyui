import utils from './utils';

const config = {
  dict: {
    key_field: "key",
    title_field: "title",
    dicts: {}
  },
  autocomplete: {
    configs: {},
    default: {
      maxList: 20,
      delay: 100,
      loadData: null,
      minWord: 0,
      title: 'title',
      key: 'key',
      render: null,
      getValue(item) {
        let title = '';
        let key = null;
        if (utils.isObject(item)) {
          title = item[this.title];
          key = item[this.key];
        } else {
          title = item;
          key = item;
        }
        let result = { key, title, value: item };
        if (this.render && result.key) {
          result.html = this.render.call(null, result);
        }
        return result;
      }
    }
  },
  modal: {
    hasDivider: false
  },
  page: {
    small: false,
    size: 10,
    sizes: [10, 20, 50, 100],
    layout: 'total,pager,jumper,sizes'
  },
  datepicker: {
    format: {
      date: 'YYYY-MM-DD',
      month: 'YYYY-MM',
      year: 'YYYY',
      time: 'HH:mm',
      datetime: 'YYYY-MM-DD HH:mm',
      datehour: 'YYYY-MM-DD HH:mm',
      datetimesecond: 'YYYY-MM-DD HH:mm:ss'
    },
    shortcuts: {
      today: {
        title: "今天",
        value() {
          return new Date();
        }
      },
      yesterday: {
        title: "昨天",
        value() {
          const date = new Date();
          date.setTime(date.getTime() - (3600 * 1000 * 24));
          return date;
        }
      }
    },
    weeks: ['日', '一', '二', '三', '四', '五', '六'],
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一', '十二'],
    datetimeOptions: {
      minuteStep: 5
    },
    daterangeOptions: {
      paramName: {
        start: 'start',
        end: 'end'
      }
    },
  }
};

const func = {
  getDict(name) {
    const dict = config.dict.dicts[name];
    if (!dict) {
      log.error(`Config:不存在命名为${name}的字典`);
      return [];
    }
    return dict;
  },
  getOption(type, name) {
    let key = `${type}`;
    if (!utils.isNull(name)) {
      key = `${type}.${name}`;
    }
    const value = utils.getKeyValue(config, `${key}`);
    if (utils.isNull(value)) {
      log.error(`Config:不存在${key}的配置项`);
      return null;
    }
    return value;
  },
  config(name, value) {
    if (utils.isNull(name)) {
      return false;
    }
    utils.setKeyValue(config, name, value);
    return true;
  },
  initDict(objects) {
    Object.assign(config.dict.dicts, objects);
  },
  addDict(name, value) {
    config.dict.dicts[name] = value;
  }
}


export default func;
