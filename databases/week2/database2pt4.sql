-- One-to-Many relationship: One artist can have many albums
CREATE TABLE artists (
  artist_id INT PRIMARY KEY,
  artist_name VARCHAR(255) NOT NULL,
  artist_description TEXT,
  artist_image_url VARCHAR(255)
);

-- One-to-Many relationship: One album can have many songs, and one artist can have many albums
CREATE TABLE albums (
  album_id INT PRIMARY KEY,
  album_title VARCHAR(255) NOT NULL,
  album_description TEXT,
  album_image_url VARCHAR(255),
  artist_id INT,
  FOREIGN KEY (artist_id) REFERENCES artists(artist_id)
);

-- One-to-Many relationship: One album can have many songs
CREATE TABLE songs (
  song_id INT PRIMARY KEY,
  song_title VARCHAR(255) NOT NULL,
  song_length TIME,
  song_description TEXT,
  song_url VARCHAR(255),
  album_id INT,
  FOREIGN KEY (album_id) REFERENCES albums(album_id)
);

-- One-to-Many relationship: One user can have many playlists
CREATE TABLE playlists (
  playlist_id INT PRIMARY KEY,
  playlist_title VARCHAR(255) NOT NULL,
  playlist_description TEXT,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- One-to-Many relationship: One user can create many playlists
CREATE TABLE users (
  user_id INT PRIMARY KEY,
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL
);

-- Many-to-Many relationship: A playlist can have many songs, and a song can belong to many playlists
CREATE TABLE playlist_songs (
  playlist_id INT,
  song_id INT,
  PRIMARY KEY (playlist_id, song_id),
  FOREIGN KEY (playlist_id) REFERENCES playlists(playlist_id),
  FOREIGN KEY (song_id) REFERENCES songs(song_id)
);

-- Many-to-Many relationship: A user can have many playlists, and a playlist can belong to many users
CREATE TABLE user_playlists (
  user_id INT,
  playlist_id INT,
  PRIMARY KEY (user_id, playlist_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (playlist_id) REFERENCES playlists(playlist_id)
);

-- Many-to-Many relationship: A user can have many favorite songs, and a song can be a favorite of many users
CREATE TABLE user_favorites (
  user_id INT,
  song_id INT,
  PRIMARY KEY (user_id, song_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (song_id) REFERENCES songs(song_id)
);
