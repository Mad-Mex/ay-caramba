import { PictureDetailContainer } from "../../components/Picture/PictureDetailContainer/PictureDetailContainer"


export const PicturesDetailPage = () => {
  return (
    <div className='mb-32'>
      <h1 className="mt-9 -mb-[1.625rem] text-[4rem] text-primaryLight text-center  uppercase"> Cuadros </h1>
      <div className="mb-20 w-full h-3 bg-primaryLight"></div>

      <div>
        <PictureDetailContainer />
      </div>

    </div>
  )
}
