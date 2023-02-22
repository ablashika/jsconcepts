function memoFibo(index, cache) {
    cache = cache || []

    if (cache[index]) {
        return cache[index]
    } else {
          if (index < 3) return 1
          else {
            // console.log(cache)
            cache[index] = memoFibo(index - 1, cache) + memoFibo(index - 2, cache)
          }
    }

    return cache[index]
    
}

console.log(memoFibo(9))