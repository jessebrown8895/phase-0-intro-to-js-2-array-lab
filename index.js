const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}

function  destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const kitty = [...cats, name]
    return kitty
}

function prependCat(name){
    const kitty = [name, ...cats]
    return kitty
}

function  removeLastCat(){
    const kitty = cats.slice(0, 2)
    return kitty 
}

function removeFirstCat(){
    const kitty = cats.slice(1)
    return kitty
}


    






 