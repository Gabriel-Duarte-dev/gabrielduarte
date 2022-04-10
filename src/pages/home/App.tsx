import { Card } from "../../components/Card";
import { MainLayout } from "../../components/MainLayout";
import { MyTechnologies } from "../../components/MyTechnologies";
import { Profile } from "../../components/Profile";
import cardInfo from "../../assets/cardInfo.json";
import { ContainerCard } from "../../components/ContainerCard";
import { Footer } from "../../components/Footer";

function App(): JSX.Element {
  return (
    <main>
      <MainLayout>
        <Profile />
        <MyTechnologies />
        <ContainerCard title="PROJETOS">
          {cardInfo.map((card, index) => {
            return (
              <Card
                description={card.description}
                image={card.image}
                key={index}
              />
            );
          })}
        </ContainerCard>
        <Footer />
      </MainLayout>
    </main>
  );
}

export default App;
