// once again, I do not want to import classnames
function classnames(...classes: Array<string>): string {
    return classes.join(" ")
}

export default classnames