export default function trimCode(str) {
    var rows = str.toString().split(/\n/);
    var minSpaces = null;
    rows.forEach((r) => {
        if (r.trim() != '') {
            var match = r.match(/^[ ]+/);
            if (match) {
                if (minSpaces === null || minSpaces > match[0].length) {
                    minSpaces = match[0].length;
                }
            }
        }
    });
    if (minSpaces) {
        var trimmedRows = [];
        rows.forEach((r) => {
            var re = new RegExp('^[ ]{' + minSpaces + '}', 'gi');
            trimmedRows.push(r.replace(re, ''));
        });
        str = trimmedRows.join('\n');
    }
    return str.trim();
};
