import { BsEnvelope } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa6';
import {
    SlSocialGithub,
    SlSocialInstagram,
    SlSocialLinkedin,
    SlSocialYoutube,
} from 'react-icons/sl';
import {
    ProfileContainer,
    SocialMediaIconsContainer,
} from '../../assets/styles/components/ProfileHeader/ProfileHeader.style';
import { SocialMediaIcon } from './SocialMediaIcon';

export function ProfileHeader() {
    return (
        <ProfileContainer>
            <img src="/avatar.jpeg" alt="Avatar de Artur Bomtempo" />
            <h2>Artur Bomtempo</h2>
            <p>Full Stack Developer passionate about technology since 2006.</p>
            <SocialMediaIconsContainer>
                <SocialMediaIcon
                    link="https://github.com/arturbomtempo-dev"
                    icon={<SlSocialGithub />}
                />
                <SocialMediaIcon
                    link="https://www.instagram.com/arturbomtempo.dev/"
                    icon={<SlSocialInstagram />}
                />
                <SocialMediaIcon
                    link="https://www.linkedin.com/in/artur-bomtempo/"
                    icon={<SlSocialLinkedin />}
                />
            </SocialMediaIconsContainer>
        </ProfileContainer>
    );
}
