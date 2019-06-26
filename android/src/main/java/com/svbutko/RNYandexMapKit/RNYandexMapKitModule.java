
package com.svbutko.RNYandexMapKit;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = RNYandexMapKitModule.REACT_CLASS)
public class RNYandexMapKitModule extends ReactContextBaseJavaModule {
  public static final String REACT_CLASS = "RNYandexMapKit";
  private final ReactApplicationContext reactContext;

  private String apiKey;

  public RNYandexMapKitModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return REACT_CLASS;
  }

  @ReactMethod
  public void setApiKey(String apiKey) {
    this.apiKey = apiKey;
  }

  public String getApiKey() {
    return apiKey;
  }
}