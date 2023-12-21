"use server"
import ISCard from "@/components/infinite-scroll/ISCard";
import { ISItemProp } from "@/lib/types";

export const fetchWeeklyChart = async (date: string, pageNumber: number) => {
  const pageSize = 6;
  const url = `https://billboard-api5.p.rapidapi.com/api/charts/hot-100?week=${date}`;
  const options: {
    method: string;
    headers: {
      'X-RapidAPI-Key': string;
      'X-RapidAPI-Host': string;
    };
  } = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY as string,
      'X-RapidAPI-Host': 'billboard-api5.p.rapidapi.com'
    }
  };

try {
	const response = await fetch(url, options);
	const data = await response.json();

  // console.log({data})

  if(data.message) {
    return (
      <div className='text-center text-2xl text-white py-20'>
        <div>
          {data.message}
        </div>
      </div>
    )
  }
  const paginatedData = createPaginatedArray(data.chart.entries, pageSize);

  return paginatedData[pageNumber].map((item: ISItemProp, i: number) => <ISCard key={i} item={item} index={i} /> );
  
} catch (error) {
	console.error(error);
}
// format(YYYY-MM-DD)
}

// Function to create an array of arrays
function createPaginatedArray(data:ISItemProp[], pageSize:number) {
  let paginatedArray = [];

  for (let i = 0; i < data.length; i += pageSize) {
      // Create a sub-array of 'pageSize' items
      let page = data.slice(i, i + pageSize);
      paginatedArray.push(page);
  }

  console.log({paginatedArray})

  return paginatedArray;
}



