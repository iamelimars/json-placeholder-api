import * as profiles from '../../data/profiles.json'

export default (req, res) => {
    setTimeout(() => {
        res.status(200).json(profiles)
        
    }, 5000);
}