let countA = 0;
let countB = 0;

//Action of increas countA
export const addCountA = () => {
	return {
		type: 'ADD_COUNT_A',
		count: countA++// num
	}
}

//Action of increas countB
export const addCountB = () => {
	return {
		type: 'ADD_COUNT_B',
		count: countB++ //num
	}
}

export const data = (channels) =>
{
  return {
    type: 'DATA',
    channels: channels
  }
}

export const yclick = (thumb, link) => {
  return {
    type: 'Y_CLICK',
    thumb: thumb,
    link: link
  }
}
