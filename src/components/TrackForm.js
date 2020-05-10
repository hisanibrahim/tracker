import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackFrom = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Type name here..."
          autoCorrect={false}
          autoCapitalize="sentences"
        />
      </Spacer>
      <Spacer>
        {!recording ? (
          <Button
            // disabled={!name}
            title="Start recording"
            onPress={startRecording}
          />
        ) : (
          <Button
            //   disabled={!name}
            title="Stop"
            onPress={stopRecording}
          />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackFrom;
