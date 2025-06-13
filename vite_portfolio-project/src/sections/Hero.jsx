import {Canvas} from "@react-three/fiber"
import CanvasLoader from "../components/CanvasLoader"

const Hero = ()=>{
    return (
        <section className='min-h-screen w-full flex flex-col
        relative'>
            <div className='w-full mx-auto flex flex-col
            sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-2xl font-medium
                text-white text-center font-generalsas'>Hi, I am Ayaka 
                <span className='waving-hand' >👋</span></p>
                <p className='hero_tag text-gray_gradient'>
                    Building Products & Brands</p>

                    <div className='min-h-screen w-full flex'>
                        <Canvas className="w-full h-full">
                            <Suspense fallback={<CanvasLoader />}>
                            <PerspectiveCamera makeDefault position={[0,0,30]}/>
                            <HackerRoom />
                            </Suspense>
                        </Canvas>
                    </div>
            </div>

        </section>
    )
}

export default Hero