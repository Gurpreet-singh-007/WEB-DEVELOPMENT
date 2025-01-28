import Random from "./components/Random";
import Tag from "./components/Tag";




export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background min-h-max">
     <h1 className="bg-white rounded-md mx-12 my-4 text-center font-bold text-4xl p-1"> RANDOM GIFS</h1>
     <div className="flex flex-col">
       <Random/>
       <Tag/>
     </div>
    </div>
  );
}
