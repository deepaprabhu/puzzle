sortType = [1, 2, 3, 4, 5, 6, 7, 8, 9]
createPuzzle = {
  sortType: [],
  createStart: function(data) { data ? this.createDom(sortType) : this.createDom(this.rand()) },
  createDom: function(data) {
    let parentDiv = document.getElementById('wrapper')
    parentDiv.innerHTML = ''
    for (let i in data) {
      let div = document.createElement('div')
      div.classList.add('div_' + data[i])
      let text = document.createTextNode(data[i])
      div.appendChild(text)
      parentDiv.append(div)
    }
  },
  rand: function() {
    this.sortType = [];
    for (i = 1; this.sortType.length < 9; i++) {
      let v = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
      this.sortType.indexOf(v) == -1 ? this.sortType.push(v) : this.sortType;
      console.log(v)
    }
    return this.sortType
  },
  init: function() {
    self = this;
    this.createDom(sortType)
  }
}
createPuzzle.init()