# Copying the debug signing properties to Android project root
echo "Configuring Android signing properties...";
cp "$(pwd)/signing/debug-signing.properties" "$(pwd)/platforms/android";
cp "$(pwd)/signing/mangiare.jks" "$(pwd)/platforms/android";
echo "Finished.";