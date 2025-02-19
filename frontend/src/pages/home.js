const Home = () => {
  return (
    <>
      {
        <div className="content">
          <div className="page-title">Pokémon Team Builder</div>
          <div className="home-card">
            <img
              className="home-image"
              alt="Professor Oak"
              src={require(`../img/Oak.png`)}
            ></img>
            <div className="home-description">
              Welcome to this wonderful app of Pokémon. My name is Oak! People
              call me the Pokémon Prof. This app is inhabited by creatures
              called Pokemon!
              <br></br>
              <br></br>
              Check out the Pokémon tab to learn about Pokémon and start
              building your team, submit it on the My Team tab, and check out
              the teams others have put together on the Teams tab!
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Home;
