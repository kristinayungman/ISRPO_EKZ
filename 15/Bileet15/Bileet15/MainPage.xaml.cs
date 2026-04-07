using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Bileet15
{
    /// <summary>
    /// Логика взаимодействия для MainPage.xaml
    /// </summary>
    public partial class MainPage : Page
    {
        public MainPage()
        {
            InitializeComponent();
            CityList.ItemsSource = DB.Context.City.ToList();
            RegionFilter.ItemsSource = DB.Context.Region.ToList();
            OkrugFilter.ItemsSource = DB.Context.Okrug.ToList();
        }

        private void RegionFilter_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            var region = RegionFilter.SelectedItem as Region;
            var dataRegion = DB.Context.City.Where(c => c.RegionId == region.Id).ToList();
            CityList.ItemsSource = dataRegion;

        }

        private void CityFilter_TextChanged(object sender, TextChangedEventArgs e)
        {
            CityList.ItemsSource=DB.Context.City.Where(c => c.Title.ToLower().Contains(CityFilter.Text.ToLower())).ToList();
            if (CityFilter.Text.Length<=0)
            {
                CityList.ItemsSource = DB.Context.City.ToList();
            }
        }

        private void Populationfilter_TextChanged(object sender, TextChangedEventArgs e)
        {
            CityList.ItemsSource = DB.Context.City.Where(c => c.Population.ToString().ToLower().Contains(Populationfilter.Text.ToLower())).ToList();
            if (Populationfilter.Text.Length <= 0)
            {
                CityList.ItemsSource = DB.Context.City.ToList();
            }
        }

        private void OkrugFilter_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            var okrug = OkrugFilter.SelectedItem as Okrug;
            var dataOkrug = DB.Context.City.Where(c => c.Region.OkrugId == okrug.Id).ToList();
            CityList.ItemsSource = dataOkrug;
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            CityFilter.Text = "";
            Populationfilter.Text = "";
            RegionFilter.SelectedIndex = -1;
            OkrugFilter.SelectedIndex = -1;
            CityList.ItemsSource = DB.Context.City.ToList();

        }
    }
}
