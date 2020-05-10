import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackFrom = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  console.log(locations.length);
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
    </>
  );
};

export default TrackFrom;
