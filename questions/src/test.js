const { assert } = require("chai");

function upArray(arr) {
  let add = 1;
  let answer = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    const sum = arr[i] + add;
    add = Math.floor(sum / 10);
    answer.unshift(sum % 10);
  }

  if (add > 0) {
    answer.unshift(add);
  }

  return answer;
}

describe("Tests", () => {
  it("test", () => {
    assert.sameOrderedMembers(upArray([4, 3, 2, 5]), [4, 3, 2, 6]);
    assert.sameOrderedMembers(upArray([2, 3, 9, 9]), [2, 4, 0, 0]);
    assert.sameOrderedMembers(upArray([9, 9]), [1, 0, 0]);
    assert.sameOrderedMembers(upArray([0, 7]), [0, 8]);
    assert.sameOrderedMembers(
      upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1]
    );
    assert.sameOrderedMembers(upArray([9]), [1, 0]);
    assert.sameOrderedMembers(upArray([1, 9]), [2, 0]);
  });
});
