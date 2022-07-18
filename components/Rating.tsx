interface RatingProps {
  rating: number;
}
export const Rating = ({ rating }: RatingProps) => {
  return <div className='bg-pink-900 font-bold text-blue-500'>{rating}</div>;
  //wyzej mamy destrukturyzacje z obiektu props.rating
  // const Rating = (props: RatingProps) => {
  //   return <div className='font-bold text-blue-500'>{props.rating}</div>;
};
//rating widzi tylko to co widzi parent Home
