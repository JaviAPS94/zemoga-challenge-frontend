import React, { useEffect, useState } from 'react';

export const Portfolio = () => {

    const [name, setName] = useState('');
    const [experience, setExperience] = useState('');
    const [userImage, setUserImage] = useState('');
    
    const [tweets, setTweets] = useState([]);

    const getPortfolio = async () => {
        const response = await fetch(`http://localhost:8080/api/zemoga-challenge/portfolio/user/Alex Pinaida?tweets=5`);

        const data = await response.json();

        setTweets(data.tweets);
        setName(data.portfolio.name);
        setExperience(data.portfolio.experience);
        setUserImage(data.portfolio.image_path);
    }

    useEffect(() => {
        getPortfolio();
    }, [])

    return (
        <div className="row">
            <div className="col-md-5">
                <form className="card card-body">
                    <img src={(userImage === '') ? "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-No-Background.png" : userImage} class="img-fluid img-thumbnail" alt="UserImage" width="300" height="300"></img>
                    <h4>Twitter Timeline de {name}</h4>
                    <table className="table table-striped">
                        <thead>
                        </thead>
                        <tbody>
                            {tweets.map(tweet => (
                                <tr key={tweet._id}>
                                    <td class="w-25">
                                        <img src={(tweet.entities.media.length > 0) ? tweet.entities.media[0].media_url_https : "https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-transparent-background-21.png"} class="img-fluid img-thumbnail" alt="Sheep"></img>
                                    </td>
                                    <td>
                                        <h5>{tweet.text}</h5>
                                        <h5>{tweet.created_at}</h5>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </form>
            </div>
            <div className="col-md-6">
                <h1>{name}</h1>
                <h2>Experiencia</h2>
                <p>{experience}</p>
            </div>
        </div>
    )
}