class WorkletProcessor extends AudioWorkletNode {
  process(inputs: any) {
    // const input = inputs[0];
    console.log(inputs);
    return true;
  }
}