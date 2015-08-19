import Em from 'ember';

/**
 * syntax
 * {{em-pagination current=current count=count pageSizes=sizes}}
 * current: number  当前是第几页
 * count: number  一共有几页
 * pageSizes: array  每页多少条数据  -- [20, 50, 100]
**/
export default Em.Component.extend({
  tagName: 'ul',
  classNameBindings: ['pagination', 'isHidden:hidden'],
  pageSizes: [20, 50, 100],
  pager: false,
  hide: false,
  pagerNext: 'Next',
  pagerPrevious: 'Previous',
  paginationPrevious: '«',
  paginationNext: '»',
  seperator: '…',
  countOut: 2,
  countIn: 2,
  firstPage: 1,
  current: 1,
  lastPage: Em.computed.alias('count'),

  isFirst: function () {
    return this.get('current') === this.get('firstPage');
  }.property('firstPage', 'current'),

  isLast: function () {
    return this.get('current') === this.get('lastPage');
  }.property('lastPage', 'current'),

  isHidden: function () {
    if (this.get('hide')) {
      return (this.get('count') === 1);
    }
    return false;
  }.property('hide', 'count'),

  pages: function () {
    var seperator = this.get('seperator'),
        current = this.get('current'),
        count = this.get('count'),
        countOut = this.get('countOut'),
        countIn = this.get('countIn'),
        result = [],
        i;

    // Beginning group of pages: n1...n2
    var n1 = 1;
    var n2 = Math.min(countOut, count);

    // Ending group of pages: n7...n8
    var n7 = Math.max(1, (count - countOut + 1));
    var n8 = count;

    // Middle group of pages: n4...n5
    var n4 = Math.max(n2 + 1, current - countIn);
    var n5 = Math.min(n7 - 1, current + countIn);
    var useMiddle = (n5 >= n4);

    // Point n3 between n2 and n4
    var n3 = Math.floor((n2 + n4) / 2);
    var useN3 = (useMiddle && ((n4 - n2) > 1));

    // Point $n6 between $n5 and $n7
    var n6 = Math.floor((n5 + n7) / 2);
    var useN6 = (useMiddle && ((n7 - n5) > 1));

    var links = [];

    // Generate links data in accordance with calculated numbers
    for (var n = n1; n <= n2; n++) {
      links[n] = n;
    }

    if (useN3) {
      links[n3] = seperator;
    }

    for (i = n4; i <= n5; i++) {
      links[i] = i;
    }

    if (useN6) {
      links[n6] = seperator;
    }

    for (i = n7; i <= n8; i++) {
      links[i] = i;
    }

    links.forEach(function (content) {
      result.push(content);
    });

    // this.sendAction('action', current);
    return result;
  }.property('count', 'current', 'countOut', 'countIn'),

  click: function (event) {
    // stop `#` from jumping to top of page
    event.preventDefault();
  },
  actions: {
    next: function () {
      if (!this.get('isLast')) {
        var current = this.get('current');

        this.set('current', parseInt(current, 10) + 1);
      }
    },

    previous: function () {
      if (!this.get('isFirst')) {
        var current = this.get('current');

        this.set('current', parseInt(current, 10) - 1);
      }
    }
  }
});
