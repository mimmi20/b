/**
 * Unicode special character support
 *
 * Detection is made by testing missing glyph box rendering against star character
 * If widths are the same, this "probably" means the browser didn't support the star character and rendered a glyph box instead
 * Just need to ensure the font characters have different widths
 *
 * Warning : positive Unicode support doesn't mean you can use it inside <title>, this seams more related to OS & Language packs
 */

"use strict";

Modernizr.addTest('ps-unicode', function () {
    var bool = false,
        missingGlyph = document.createElement('span'),
        star = document.createElement('span');

    Modernizr.testStyles('#modernizr{font-family:Arial,sans;font-size:300em;}', function (node) {
        missingGlyph.innerHTML = '&#5987';
        star.innerHTML = '&#9734';
        node.appendChild(missingGlyph);
        node.appendChild(star);
        bool = 'offsetWidth' in missingGlyph && missingGlyph.offsetWidth !== star.offsetWidth;
    });

    return bool;
});
