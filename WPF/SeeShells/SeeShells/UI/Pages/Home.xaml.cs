﻿using System;
using System.IO;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Navigation;
using SeeShells.IO.Networking;
using Microsoft.Win32;
using SeeShells.UI.ViewModels;
using Newtonsoft.Json;
using SeeShells.IO.Networking.JSON;

namespace SeeShells.UI.Pages
{
    /// <summary>
    /// Interaction logic for Home.xaml
    /// </summary>
    public partial class Home : Page
    {
        private readonly FileLocations locations;
        private GridLength visibleRow = new GridLength(2, GridUnitType.Star);
        private GridLength hiddenRow = new GridLength(0);

        public Home()
        {
            InitializeComponent();

            string currentDirectory = Directory.GetCurrentDirectory();
            locations = new FileLocations(
                os: currentDirectory + @"\OS.json",
                guid: currentDirectory + @"\GUIDs.json",
                script: currentDirectory + @"\Scripts.json"
            );

            this.DataContext = locations;
            UpdateOSVersionList();
            HideOfflineRows();
        }

        private void OfflineBrowseButton_Click(object sender, RoutedEventArgs e)
        {
            OpenFileDialog openFileDialog = new OpenFileDialog
            {
                Filter = "Registry files (*.reg)|*.reg",
                InitialDirectory = Directory.GetCurrentDirectory()
            };

            if (openFileDialog.ShowDialog() != true)
                return;

            locations.OfflineFileLocation = openFileDialog.FileName;
        }

        private void UpdateOSVersionList()
        {
            OSVersion.SelectedIndex = -1;
            OSVersion.Items.Clear();
            OSVersion.Items.Add("Generic Windows");

            if (!File.Exists(locations.OSFileLocation))
                return;

            string json = File.ReadAllText(locations.OSFileLocation);
            try
            {
                IList<RegistryLocations> registryLocations = JsonConvert.DeserializeObject<IList<RegistryLocations>>(json);
                foreach (RegistryLocations location in registryLocations)
                {
                    if (!OSVersion.Items.Contains(location.OperatingSystem))
                        OSVersion.Items.Add(location.OperatingSystem);
                }
            }
            catch (JsonSerializationException)
            {
                MessageBox.Show("The OS file you selected is not formatted properly.", "Incorrect OS Configuration File Format", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private void OSBrowseButton_Click(object sender, RoutedEventArgs e)
        {
            string location = GetFileFromBrowsing();
            if(UserSelectedFile(location))
            {
               locations.OSFileLocation = location;

                UpdateOSVersionList();
            }
        }

        private async void OSUpdateButton_Click(object sender, RoutedEventArgs e)
        {
            string location = locations.OSFileLocation;
            if (!ContinueAfterSendingOverwriteWarning(location))
                return;

            string message = "File saved at\n" + location;
            string caption = "Success";
            MessageBoxImage image = MessageBoxImage.Information;

            try
            {
                Mouse.OverrideCursor = Cursors.Wait;

                await Task.Run(() => API.GetOSRegistryLocations(location));

            }
            catch (APIException)
            {
                message = "Failed to save the OS configuration file.";
                caption = "Fail";
                image = MessageBoxImage.Error;
            }

            Mouse.OverrideCursor = Cursors.Arrow;
            MessageBox.Show(message, caption, MessageBoxButton.OK, image);

        }

        private void GUIDBrowseButton_Click(object sender, RoutedEventArgs e)
        {
            string location = GetFileFromBrowsing();
            if (UserSelectedFile(location))
            {
                locations.GUIDFileLocation = location;
            }
        }

        private async void GUIUpdateButton_Click(object sender, RoutedEventArgs e)
        {
            string location = locations.GUIDFileLocation;
            if (!ContinueAfterSendingOverwriteWarning(location))
                return;

            string message = "File saved at\n" + location;
            string caption = "Success";
            MessageBoxImage image = MessageBoxImage.Information;

            try
            {
                Mouse.OverrideCursor = Cursors.Wait;

                await Task.Run(() => API.GetGuids(location));

            }
            catch (APIException)
            {
                message = "Failed to save the GUID configuration file.";
                caption = "Fail";
                image = MessageBoxImage.Error;
            }

            Mouse.OverrideCursor = Cursors.Arrow;
            MessageBox.Show(message, caption, MessageBoxButton.OK, image);
        }

        private void ScriptBrowseButton_Click(object sender, RoutedEventArgs e)
        {
            string location = GetFileFromBrowsing();
            if (UserSelectedFile(location))
            {
                locations.ScriptFileLocation = location;
            }
        }

        private void ScriptUpdateButton_Click(object sender, RoutedEventArgs e)
        {
            MessageBox.Show("Scripting is still a work in progress.", "Check back later.", MessageBoxButton.OK, MessageBoxImage.Information);
        }

        private bool ContinueAfterSendingOverwriteWarning(string path)
        {
            MessageBoxResult answer;

            if (File.Exists(path))
            {
                answer = MessageBox.Show("This button will overwrite the file currently at\n" + path + "\nwith the most recent configuration data.\nWould you like to continue?",
                    "Overwrite file?",
                    MessageBoxButton.YesNo,
                    MessageBoxImage.Warning);

                if(answer == MessageBoxResult.Yes)
                    return true;

                return false;
            }

            answer = MessageBox.Show("This button will create a file at\n" + path + "\nwith the most recent configuration data.\nWould you like to continue?",
                    "Create file?",
                    MessageBoxButton.YesNo,
                    MessageBoxImage.Warning);
            if (answer == MessageBoxResult.Yes)
                return true;

            return false;

        }


        private bool UserSelectedFile(string result)
        {
            if (result == string.Empty)
                return false;

            return true;
        }

        private string GetFileFromBrowsing()
        {
            OpenFileDialog openFileDialog = new OpenFileDialog
            {
                Filter = "JSON files (*.json)|*.json",
                InitialDirectory = Directory.GetCurrentDirectory()
            };

            if (openFileDialog.ShowDialog() != true)
                return string.Empty;

            return openFileDialog.FileName;
        }


        private void ParseButton_Click(object sender, RoutedEventArgs e)
        {
            if (!ConfigurationFilesAreValid())
                return;

            if (OfflineCheck.IsChecked == true)
                if (!OfflineSelectionsAreValid())
                    return;

            NavigationService.Navigate(new TimelinePage());
        }

        private bool ConfigurationFilesAreValid()
        {
            if (!File.Exists(locations.OSFileLocation))
            {
                MessageBox.Show("Select a proper OS configuration file or create a new one.", "Missing OS File", MessageBoxButton.OK, MessageBoxImage.Error);
                return false;
            }
            if (!File.Exists(locations.GUIDFileLocation))
            {
                MessageBox.Show("Select a proper GUID configuration file or create a new one.", "Missing GUID File", MessageBoxButton.OK, MessageBoxImage.Error);
                return false;
            }
            if (!File.Exists(locations.ScriptFileLocation))
            {
                MessageBox.Show("Select a proper script configuration file or create a new one.", "Missing Script File", MessageBoxButton.OK, MessageBoxImage.Error);
                return false;
            }

            return true;
        }

        private bool OfflineSelectionsAreValid()
        {
            if(!File.Exists(locations.OfflineFileLocation))
            {
                MessageBox.Show("Select a registry hive file.", "Missing Hive", MessageBoxButton.OK, MessageBoxImage.Error);
                return false;
            }

            if (OSVersion.SelectedItem is null)
            {
                MessageBox.Show("Select what OS Version the offline hive is.", "No OS Version selected.", MessageBoxButton.OK, MessageBoxImage.Error);
                return false;
            }

            return true;
        }

        private void HelpButton_Click(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new HelpPage());
        }

        private void OfflineChecked(object sender, EventArgs e)
        {
            ShowOfflineRows();
        }

        private void OfflineUnchecked(object sender, EventArgs e)
        {
            HideOfflineRows();
        }

        private void HideOfflineRows()
        {
            OfflineLocationRow.Height = hiddenRow;
            OSVersionRow.Height = hiddenRow;
        }

        private void ShowOfflineRows()
        {
            OfflineLocationRow.Height = visibleRow;
            OSVersionRow.Height = visibleRow;
        }
    }
}
