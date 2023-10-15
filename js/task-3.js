
function getElementWidth(content, padding, border) {
    const sizeContent = Number.parseInt(content);
    const sizePadding = Number.parseInt(padding);
    const sizeBorder = Number.parseFloat(border);
    return sizeContent + 2 * sizePadding + 2 * sizeBorder;  
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200