const days = 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split('_')
const monthsShort = '1-ئاي_2-ئاي_3-ئاي_4-ئاي_5-ئاي_6-ئاي_7-ئاي_8-ئاي_9-ئاي_10-ئاي_11-ئاي_12-ئاي'.split('_')

export default {
  isoName: 'ug',
  nativeName: 'ئۇيغۇرچە',
  rtl: true,
  label: {
    clear: 'تازلاش',
    ok: 'جەزملەش',
    cancel: 'بىكار قىلىش',
    close: 'تاقاش',
    set: 'تەڭشەك',
    select: 'تاللاش',
    reset: 'ئەسلىگە قايتۇرۇش',
    remove: 'چىقىرۋىتىش',
    update: 'يېڭىلاش',
    create: 'قۇرۇش',
    search: 'ئىزدەش',
    filter: 'سۈزۈش',
    refresh: 'يېڭىلاش'
  },
  date: {
    days: days,
    daysShort: 'ي_د_س_چ_پ_ج_ش'.split('_'),
    months: monthsShort,
    monthsShort: monthsShort,
    headerTitle: function (date, model) {
      return monthsShort[ model.month - 1 ] + 'نىڭ ' +
        model.day + '-كۈنى، ' +
        days[ date.getDay() ]
    },
    firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: false,
    pluralDay: 'كۈن'
  },
  table: {
    noData: 'ئۇچۇر يوق',
    noResults: 'مۇناسىۋەتلىك ئۇچۇر تېپىلمىدى',
    loading: 'يۈكلىنىۋاتىدۇ...',
    selectedRecords: function (rows) {
      return rows + ' قۇر تاللاندى'
    },
    recordsPerPage: 'ھەربەتتىكى قۇر سانى:',
    allRows: 'ھەممىسى',
    pagination: function (start, end, total) {
      return start + '-' + end + ' / ' + total
    },
    columns: 'ئىستون'
  },
  editor: {
    url: 'URL',
    bold: 'Bold',
    italic: 'ئىتالىيان',
    strikethrough: 'Strikethrough',
    underline: 'ئاستى سىزىق',
    unorderedList: 'تەرتىپسىز تىزىملىك',
    orderedList: 'زاكاز تىزىملىكى',
    subscript: 'مۇشتەرى',
    superscript: 'Superscript',
    hyperlink: 'Hyperlink',
    toggleFullscreen: 'تولۇق ئېكراننى ئالماشتۇرۇڭ',
    quote: 'نەقىل',
    left: 'سول تەڭگە',
    center: 'Center align',
    right: 'ئوڭ توغرىلاش',
    justify: 'توغرىلاشنى توغرىلاڭ',
    print: 'بېسىش',
    outdent: 'تەۋەككۈلچىلىكنى ئازايتىش',
    indent: 'تەۋەككۈلچىلىكنى ئاشۇرۇش',
    removeFormat: 'فورماتنى ئۆچۈرۈڭ',
    formatting: 'فورماتلاش',
    fontSize: 'خەت چوڭلۇقى',
    align: 'توغرىلاش',
    hr: 'توغرىسىغا قائىدە قىستۇرۇش',
    undo: 'ئەمەلدىن قالدۇرۇش',
    redo: 'Redo',
    heading1: 'Heading 1',
    heading2: 'Heading 2',
    heading3: 'Heading 3',
    heading4: 'Heading 4',
    heading5: 'Heading 5',
    heading6: 'Heading 6',
    paragraph: 'ئابزاس',
    code: 'كود',
    size1: 'بەك كىچىك',
    size2: 'ئازراق كىچىك',
    size3: 'نورمال',
    size4: 'ئوتتۇراھال چوڭ',
    size5: 'چوڭ',
    size6: 'بەك چوڭ',
    size7: 'ئەڭ چوڭ',
    defaultFont: 'كۆڭۈلدىكى خەت نۇسخىسى',
    viewSource: 'مەنبەنى كۆرۈش'
  },
  tree: {
    noNodes: 'ئۇچۇر يوق',
    noResults: 'مۇناسىۋەتلىك ئۇچۇر تېپىلمىدى'
  }
}
