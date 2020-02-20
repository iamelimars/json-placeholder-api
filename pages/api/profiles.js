import * as profiles from '../../data/profiles.json'

export default (req, res) => {
    res.status(200).json(profiles)
}