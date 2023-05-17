import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

// Assuming the URLs for the social media profiles
const twitterUrl = 'https://www.linkedin.com/in/dinakar-pathakota-32a823251';
const linkedinUrl = 'https://linkedin.com/in/example';
const youtubeUrl = 'https://youtube.com/c/example';

function SocialMediaLinks() {
  return (
    <div>
      <a href={twitterUrl}>
        <AiFillTwitterCircle />
      </a>
      <a href={linkedinUrl}>
        <AiFillLinkedin />
      </a>
      <a href={youtubeUrl}>
        <AiFillYoutube />
      </a>
    </div>
  );
}
