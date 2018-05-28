/**
 * Created on Mon May 28 22:37:51 2018
 * @author: Uladzimir Bachyla
 */

 /**
  * TODO: You will be given a wishlist (array), containing all possible items. 
  * Each item is in the format: {name: "toy car", size: "medium", clatters: "a bit", weight: "medium"} 
  * (Ruby version has an analog hash structure, see example below)You also get a list of presents (array), 
  * you see under the christmas tree, which have the following format each: 
  * {size: "small", clatters: "no", weight: "light"}
  * 
  * Your task is to create a list of all possible presents you might get.
  */

 function guessGifts(wishlist, presents) {
    // TODO
    let res = [];
    let dic = {}
    for (let i = 0; i < wishlist.length; i++) {
        for (let j = 0; j < presents.length; j++) {
            if (wishlist[i].size == presents[j].size && wishlist[i].clatters == presents[j].clatters && wishlist[i].weight == presents[j].weight) {
                if (!(wishlist[i].name in dic)) {
                    res.push(wishlist[i].name);
                    dic[wishlist[i].name] = 1;
                }
            }
        }
    }
    return res;
}