module.exports = {
    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    pad: (num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
    }
}
