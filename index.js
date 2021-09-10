const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
    
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}

function appendCat(name){
    const kittens = [...cats, name]
    console.log(kittens)
    return kittens 
}

function prependCat(name){
    const kittens = [name, ...cats]
    return kittens
}

function removeLastCat(){
    const kittens = cats.slice(0,2)
    return kittens
}

function removeFirstCat(){
    const kittens = cats.slice(1)
    return kittens
}


 