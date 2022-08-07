export const gradient = (type1, type2) => {
  const color = [type1, type2];
  const linear = [];
  let len = color.length;
  let pos = 0;
  while (len > 0) {
    switch (color[pos]) {
    case 'fire':
      linear.push('#ffb971');
      break;
    case 'water':
      linear.push('#8cc4e2');
      break;
    case 'electric':
      linear.push('#ffe662');
      break;
    case 'grass':
      linear.push('#a8ff98');
      break;
    case 'poison':
      linear.push('#d6a2e4');
      break;
    case 'normal':
      linear.push('#dcdcdc');
      break;
    case 'ice':
      linear.push('#8cf5e4');
      break;
    case 'fighting':
      linear.push('#da7589');
      break;
    case 'ground':
      linear.push('#e69a74');
      break;
    case 'flying':
      linear.push('#bbc9e4');
      break;
    case 'psychic':
      linear.push('#ffa5da');
      break;
    case 'bug':
      linear.push('#bae05f');
      break;
    case 'rock':
      linear.push('#C9BB8A');
      break;
    case 'ghost':
      linear.push('#8291e0');
      break;
    case 'dark':
      linear.push('#8e8c94');
      break;
    case 'dragon':
      linear.push('#88a2e8');
      break;
    case 'steel':
      linear.push('#9fb8b9');
      break;
    case 'fairy':
      linear.push('#fdb9e9');
      break;
    default:
      linear.push('whitesmoke');
      break;
    }
    len--;
    pos++;
  }
  return linear;
};
