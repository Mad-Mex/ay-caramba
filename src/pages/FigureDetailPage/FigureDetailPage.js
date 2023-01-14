import { FigureDetailContainer } from '../../components/Figure/FigureDetailContainer/FigureDetailContainer'

export const FigureDetailPage = () => {
  return (
    <div className='mb-32'>
      <h1 className="mt-9 -mb-[1.625rem] text-[4rem] text-primaryLight text-center  uppercase"> Figuras </h1>
      <div className="mb-20 w-full h-3 bg-primaryLight"></div>

      <div>
        <FigureDetailContainer />
      </div>

    </div>
  )
}
