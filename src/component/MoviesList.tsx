import React, { useState, useEffect } from "react";

interface MoviesList {
  date: Date;
  units: number;
}

interface Props{
  movie:MoviesList
}

const MoviesList:React.FC<Props> = ({movie}) => {

  // const [movies, setMovies] = useState<Movies[] | []>([]);

  useEffect(() => {
     
  }, [])

  return (
    <div>Testdasfah</div>
  );
}

export default MoviesList;