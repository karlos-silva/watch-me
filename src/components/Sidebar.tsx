import { Component } from 'react';
import { Button } from '../components/Button';

import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SidebarProps extends Component{
  genres: GenreResponseProps[]
  handleClickButton: (id: number) => void
  selected: number
}

export const Sidebar = ({genres, handleClickButton, selected}: SidebarProps) => {
  return (
  <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres?.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selected === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}