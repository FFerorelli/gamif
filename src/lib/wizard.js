
const navigate = (selection, tree, numberOfSteps) => {
    if (!tree) {
        return undefined
    }
    if (!selection) {
        return undefined
    }

    if (selection.length < numberOfSteps) {
        return undefined
    }

    const lastElement = selection
        .reduce((acc, currentSelection) => {
            if (!acc) {
                return acc
            }
            return acc.children[currentSelection]
        }, tree)

    if (!lastElement) {
        return undefined
    }


    return lastElement.results
}
export default {
navigate
}