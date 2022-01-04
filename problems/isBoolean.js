//This is a challenge about checking if the type of an argument is a boolean, and if it is, returns true, else returns false.

function booWho(bool) {
  if (typeof bool == "boolean") {
    return true;
  }
  return false;
}

booWho(null);