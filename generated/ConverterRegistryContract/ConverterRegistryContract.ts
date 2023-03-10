// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class ConverterAddition extends EthereumEvent {
  get params(): ConverterAddition__Params {
    return new ConverterAddition__Params(this);
  }
}

export class ConverterAddition__Params {
  _event: ConverterAddition;

  constructor(event: ConverterAddition) {
    this._event = event;
  }

  get _token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _address(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ConverterRemoval extends EthereumEvent {
  get params(): ConverterRemoval__Params {
    return new ConverterRemoval__Params(this);
  }
}

export class ConverterRemoval__Params {
  _event: ConverterRemoval;

  constructor(event: ConverterRemoval) {
    this._event = event;
  }

  get _token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _address(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnerUpdate extends EthereumEvent {
  get params(): OwnerUpdate__Params {
    return new OwnerUpdate__Params(this);
  }
}

export class OwnerUpdate__Params {
  _event: OwnerUpdate;

  constructor(event: OwnerUpdate) {
    this._event = event;
  }

  get _prevOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ConverterRegistryContract extends SmartContract {
  static bind(address: Address): ConverterRegistryContract {
    return new ConverterRegistryContract("ConverterRegistryContract", address);
  }

  newOwner(): Address {
    let result = super.call("newOwner", []);

    return result[0].toAddress();
  }

  try_newOwner(): CallResult<Address> {
    let result = super.tryCall("newOwner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", []);

    return result[0].toAddress();
  }

  try_owner(): CallResult<Address> {
    let result = super.tryCall("owner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  tokens(param0: BigInt): Address {
    let result = super.call("tokens", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_tokens(param0: BigInt): CallResult<Address> {
    let result = super.tryCall("tokens", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  tokenCount(): BigInt {
    let result = super.call("tokenCount", []);

    return result[0].toBigInt();
  }

  try_tokenCount(): CallResult<BigInt> {
    let result = super.tryCall("tokenCount", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  converterCount(_token: Address): BigInt {
    let result = super.call("converterCount", [
      EthereumValue.fromAddress(_token)
    ]);

    return result[0].toBigInt();
  }

  try_converterCount(_token: Address): CallResult<BigInt> {
    let result = super.tryCall("converterCount", [
      EthereumValue.fromAddress(_token)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  converterAddress(_token: Address, _index: BigInt): Address {
    let result = super.call("converterAddress", [
      EthereumValue.fromAddress(_token),
      EthereumValue.fromUnsignedBigInt(_index)
    ]);

    return result[0].toAddress();
  }

  try_converterAddress(_token: Address, _index: BigInt): CallResult<Address> {
    let result = super.tryCall("converterAddress", [
      EthereumValue.fromAddress(_token),
      EthereumValue.fromUnsignedBigInt(_index)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  tokenAddress(_converter: Address): Address {
    let result = super.call("tokenAddress", [
      EthereumValue.fromAddress(_converter)
    ]);

    return result[0].toAddress();
  }

  try_tokenAddress(_converter: Address): CallResult<Address> {
    let result = super.tryCall("tokenAddress", [
      EthereumValue.fromAddress(_converter)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall extends EthereumCall {
  get inputs(): AcceptOwnershipCall__Inputs {
    return new AcceptOwnershipCall__Inputs(this);
  }

  get outputs(): AcceptOwnershipCall__Outputs {
    return new AcceptOwnershipCall__Outputs(this);
  }
}

export class AcceptOwnershipCall__Inputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall__Outputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends EthereumCall {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get _newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class RegisterConverterCall extends EthereumCall {
  get inputs(): RegisterConverterCall__Inputs {
    return new RegisterConverterCall__Inputs(this);
  }

  get outputs(): RegisterConverterCall__Outputs {
    return new RegisterConverterCall__Outputs(this);
  }
}

export class RegisterConverterCall__Inputs {
  _call: RegisterConverterCall;

  constructor(call: RegisterConverterCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _converter(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RegisterConverterCall__Outputs {
  _call: RegisterConverterCall;

  constructor(call: RegisterConverterCall) {
    this._call = call;
  }
}

export class UnregisterConverterCall extends EthereumCall {
  get inputs(): UnregisterConverterCall__Inputs {
    return new UnregisterConverterCall__Inputs(this);
  }

  get outputs(): UnregisterConverterCall__Outputs {
    return new UnregisterConverterCall__Outputs(this);
  }
}

export class UnregisterConverterCall__Inputs {
  _call: UnregisterConverterCall;

  constructor(call: UnregisterConverterCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _index(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UnregisterConverterCall__Outputs {
  _call: UnregisterConverterCall;

  constructor(call: UnregisterConverterCall) {
    this._call = call;
  }
}
