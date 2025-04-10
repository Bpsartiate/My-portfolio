window.addEventListener("load", () => {
  const skills = [
    "HTML5",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Git",
    "Responsive Design",
    "Testing/Debugging",
    "Backend Development",
    "Databases",
    "APIs",
    "Performance Optimization",
    "SEO",
    "Security",
    "TypeScript",
  ];
  const skillLevels = [
    90, 85, 95, 80, 85, 90, 75, 80, 85, 70, 65, 80, 75, 85, 90,
  ];

  const isMobile = window.innerWidth <= 768; // Check if screen is mobile

  // Gradient colors for each bar
  const barColors = [
    "#119202",
    "#9333EA",
    "#10B981",
    "#EF4444",
    "#F59E0B",
    "#6366F1",
    "#EC4899",
    "#119202",
    "#F97316",
    "#8B5CF6",
    "#06B6D4",
    "#D946EF",
    "#84CC16",
    "#F43F5E",
    "#0EA5E9",
  ];

  const options = {
    chart: {
      height: "80%",
      type: isMobile ? "bar" : "radar", // Switch between bar and radar chart
      toolbar: {
        show: false,
      },
      background: "transparent",
      foreColor: "#119202",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    series: [
      {
        name: "Web Developer Skills",
        data: skillLevels,
      },
    ],
    labels: skills,
    colors: barColors, // Assign gradient colors to bars
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: barColors,
        inverseColors: true,
        opacityFrom: 0.8,
        opacityTo: 0.2,
        stops: [0, 100],
      },
    },
    stroke: {
      width: 2,
      colors: barColors,
      dashArray: 0,
    },
    markers: {
      size: 5,
      colors: ["#119202"],
      strokeColors: "#119202",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val) {
          return val + "%";
        },
      },
      theme: "dark",
    },
    xaxis: {
      categories: skills,
      labels: {
        style: {
          colors: ["#fff"],
          fontSize: "12px",
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    yaxis: {
      show: isMobile, // Show Y-axis only for bar chart
      labels: {
        style: {
          colors: ["#119202"],
          fontSize: "12px",
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: "#4B5563",
          connectorColors: "#4B5563",
          fill: {
            colors: ["#1F2937"],
          },
        },
      },
      bar: {
        horizontal: isMobile, // Horizontal bars for mobile
        borderRadius: 4,
        columnWidth: "70%",
        distributed: true, // Assign different colors to each bar
      },
    },
  };

  const chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  // Update chart on window resize
  window.addEventListener("resize", () => {
    const isMobileNow = window.innerWidth <= 768;
    if (isMobile !== isMobileNow) {
      chart.updateOptions({
        chart: {
          type: isMobileNow ? "bar" : "radar",
        },
        yaxis: {
          show: isMobileNow,
        },
        plotOptions: {
          bar: {
            horizontal: isMobileNow,
          },
        },
      });
    }
  });
});
