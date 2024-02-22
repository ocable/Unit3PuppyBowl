import { useGetPuppiesQuery } from "./PuppyListSlice";

export default function PuppyList() {
    const { data: puppies, isLoading } = useGetPuppiesQuery();

    return (
        <>
        <ul>
          {isLoading ? (
            <li>Loading...</li>
          ) : (
            puppies.map((puppy) => (
              <li key={puppy.id}>
                <h2>{puppy.name}</h2>
                <p>{puppy.description}</p>
              </li>
            ))
          )}
        </ul>
      </>
    )
}