import { NewProductCardList } from "../NewProductCardList/NewProductCardList"


export const NewProductContainer = () => {
  return (
    <div className="mx-[6rem]">
        <h2 className="mb-10 text-base font-semibold uppercase"> Novedades </h2>
        <div>
          <NewProductCardList />
        </div>
        
    </div>
  )
}
