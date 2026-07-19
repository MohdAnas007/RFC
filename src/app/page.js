import Body from "@/components/body";
import Footer from "@/components/footer";
import Top from "@/components/top"; 

export default function Home() {
  return (
    <div>
      {/* 2. Render it with a capital letter */}
      <Top /> 
      <Body/>
      <Footer/>
    </div>
  );
}