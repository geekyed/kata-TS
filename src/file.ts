import * as fs from 'fs'


interface treePosition {
  height: number
  visibility: boolean
}

const calculateVisible = () => {
  const trees: treePosition[][] = []
  const inputStringByLine: string[] = fs.readFileSync('./input.txt', 'utf8').split('\n')

  let rowIndex: number = 0
  inputStringByLine.forEach((line: string) => {
    trees[rowIndex] = []
    const lineArr = [ ...line ]
    let colIndex: number = 0
    let maxHeight: number = -1
    lineArr.forEach((tree: string) => {
      if(tree !== '\n') {
        const treeHeight = parseInt(tree)
        trees[rowIndex]![colIndex] = { height: treeHeight, visibility: false }

        //access visibility
        if (maxHeight < treeHeight) {
          trees[rowIndex]![colIndex]!.visibility = true
          maxHeight = treeHeight
        }

        colIndex++
      }
    })
    rowIndex++
  })
  const colMaxIndex = trees[0]!.length - 1
  const rowMaxIndex = trees!.length - 1

  for (let rowIndex = 0; rowIndex <= rowMaxIndex; rowIndex++) {
    let maxHeight: number = -1

    for (let colIndex = colMaxIndex; colIndex >= 0; colIndex--) {
      const treeHeight = trees[rowIndex]![colIndex]!.height

      if (maxHeight < treeHeight) {
        trees[rowIndex]![colIndex]!.visibility = true
        maxHeight = treeHeight
      }
    }
  }

  for (let colIndex = 0; colIndex <= colMaxIndex; colIndex++) {
    let maxHeight: number = -1
    for (let rowIndex = 0; rowIndex <= rowMaxIndex; rowIndex++) {
      const treeHeight = trees[rowIndex]![colIndex]!.height

      if (maxHeight < treeHeight) {
        trees[rowIndex]![colIndex]!.visibility = true
        maxHeight = treeHeight
      }
    }
  }

  for (let colIndex = 0; colIndex <= colMaxIndex; colIndex++) {
    let maxHeight: number = -1
    for (let rowIndex = rowMaxIndex; rowIndex >= 0; rowIndex--) {
      const treeHeight = trees[rowIndex]![colIndex]!.height

      if (maxHeight < treeHeight) {
        trees[rowIndex]![colIndex]!.visibility = true
        maxHeight = treeHeight
      }
    }
  }



  let visibleCount: number = 0

  trees.forEach((treeRow: treePosition[]) => {
    let treeLine = ''
    treeRow.forEach((tree: treePosition) => {
      // treeLine = treeLine + ` [${tree.height}|${tree.visibility}${tree.visibility ? ' ' : ''}]`
      if (tree.visibility) visibleCount++
    })
    // console.log(treeLine)
  })

  console.log('Visible: ', visibleCount)

}

calculateVisible()
