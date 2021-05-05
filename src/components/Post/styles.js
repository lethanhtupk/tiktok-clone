import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height - 69,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  uiComponent: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  rightContainer: {
    alignSelf: 'flex-end',
    height: 300,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 5,
  },
  bottomContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  handle: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  description: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songName: {
    color: '#ffff',
    fontSize: 16,
    marginLeft: 5,
  },
  songImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 7,
    borderColor: '#4c4c4c',
  },
  // right container
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ffff',
  },
  iconContainer: {
    alignItems: 'center',
  },
  likeButton: {
    position: 'relative',
  },
  likeButtonIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  statsLabel: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
  pauseIcon: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    position: 'absolute',
  },
});

export default styles;
