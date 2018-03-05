function solve(str)
{
  var s = "";
  for (let i = str.length - 1; i >= 0; i--)
  {
    if (str[i] != " ")        s += str[i];
    if (str[s.length] == " ") s += str[s.length];
  }
  return s;
}

//In this Kata, we are going to reverse a string while maintaining spaces.
